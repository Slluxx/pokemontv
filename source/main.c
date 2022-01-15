
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <malloc.h>

#include <switch.h>

WebExitReason startBrowser()
{
    Result rc = 0;
    WebCommonConfig config;
    WebCommonReply reply;
    WebExitReason exitReason = 0;

    rc = webPageCreate(&config, "https://slluxx.github.io/pokemontv/");
    if (R_SUCCEEDED(rc))
    {
        rc = webConfigSetWhitelist(&config, "^http*");
        if (R_SUCCEEDED(rc))
        {
            rc = webConfigSetFooter(&config, false);
            rc = webConfigSetPointer(&config, true);
            rc = webConfigSetLeftStickMode(&config, WebLeftStickMode_Cursor);
            rc = webConfigSetScreenShot(&config, true);
            rc = webConfigSetBootDisplayKind(&config, WebBootDisplayKind_White);
            rc = webConfigSetJsExtension(&config, true);
            rc = webConfigShow(&config, &reply);
        }
        if (R_SUCCEEDED(rc))
        {
            rc = webReplyGetExitReason(&reply, &exitReason);
            if (R_SUCCEEDED(rc))
            {
                return exitReason;
            }
        }
    }
    return WebExitReason_UnknownE;
}

int main(int argc, char *argv[])
{

    consoleInit(NULL);
    padConfigureInput(1, HidNpadStyleSet_NpadStandard);
    PadState pad;
    padInitializeDefault(&pad);

    consoleInit(NULL);
    consoleUpdate(NULL);
    bool printed = false;

    while (appletMainLoop())
    {

        if (printed == false)
        {
            if (appletGetAppletType() == AppletType_Application)
            {
                WebExitReason exitReason = startBrowser();

                if (exitReason == WebExitReason_BackButton)
                {
                    continue;
                }
                else
                {
                    break;
                }
            }
            else
            {
                printf("Please start this homebrew via title-override.\n");
                printf("(Hold R while starting a game)\n\n");
                printf("Press + to exit.\n");
                printed = true;
            }
        }

        padUpdate(&pad);
        u64 kDown = padGetButtonsDown(&pad);
        if (kDown & HidNpadButton_Plus)
            break;
        consoleUpdate(NULL);
    }

    consoleExit(NULL);
    return 0;
}