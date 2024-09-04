// vocs.config.ts
import { defineConfig } from "file:///home/nate/Documents/GitHub/wallet-kit-docs/node_modules/.pnpm/vocs@1.0.0-alpha.58_@types+node@22.5.3_@types+react@18.3.5_react-dom@18.3.1_react@18.3.1__rea_5dkkqyueccelb5l2maau3gbqga/node_modules/vocs/_lib/index.js";

// sidebar.ts
var sidebar = {
  "/docs/": [
    {
      text: "Introduction"
    }
  ]
};

// vocs.config.ts
var vocs_config_default = defineConfig({
  title: "Razor Kit Docs",
  baseUrl: process.env.NODE_ENV === "production" ? "https://kit.razorwallet.kit" : "http://localhost:5173",
  titleTemplate: "%s . Razor Kit",
  description: "An all-in-one Wallet kit for every Movement Dapp",
  editLink: {
    pattern: "https://github.com/razorlabsorg/wallet-kit-docs/edit/main/docs/:path",
    text: "Suggest changes to this page"
  },
  iconUrl: "/favicon.ico",
  logoUrl: { light: "/logo.png", dark: "/logo.png" },
  rootDir: ".",
  sidebar,
  socials: [
    {
      icon: "github",
      link: "https://github.com/razorlabsorg/razorkit"
    },
    {
      icon: "discord",
      link: "https://discord.gg/razordao"
    },
    {
      icon: "x",
      link: "https://x.com/razordao"
    }
  ],
  theme: {
    accentColor: {
      light: "#ff9318",
      dark: "#ffc517"
    }
  },
  topNav: [
    { text: "Docs", link: "/docs/getting-started", match: "/docs" },
    {
      text: "Extensions",
      items: [
        {
          text: "Account Abstraction",
          link: "/account-abstraction"
        },
        {
          text: "OP Stack",
          link: "/op-stack"
        },
        {
          text: "ZKsync",
          link: "/zksync"
        },
        {
          text: "Experimental",
          link: "/experimental"
        }
      ]
    },
    {
      text: "Examples",
      link: "https://github.com/wevm/viem/tree/main/examples"
    },
    {
      text: pkg.version,
      items: [
        {
          text: `Migrating to ${toPatchVersionRange(pkg.version)}`,
          link: `/docs/migration-guide#_${toPatchVersionRange(
            pkg.version
          ).replace(/\./g, "-")}-breaking-changes`
        },
        {
          text: "Changelog",
          link: "https://github.com/wevm/viem/blob/main/src/CHANGELOG.md"
        },
        {
          text: "Contributing",
          link: "https://github.com/wevm/viem/blob/main/.github/CONTRIBUTING.md"
        }
      ]
    }
  ]
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHMiLCAic2lkZWJhci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL25hdGUvRG9jdW1lbnRzL0dpdEh1Yi93YWxsZXQta2l0LWRvY3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL25hdGUvRG9jdW1lbnRzL0dpdEh1Yi93YWxsZXQta2l0LWRvY3Mvdm9jcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbmF0ZS9Eb2N1bWVudHMvR2l0SHViL3dhbGxldC1raXQtZG9jcy92b2NzLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZvY3MnXG5pbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSAnLi9zaWRlYmFyJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogJ1Jhem9yIEtpdCBEb2NzJyxcbiAgYmFzZVVybDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gJ2h0dHBzOi8va2l0LnJhem9yd2FsbGV0LmtpdCdcbiAgICA6ICdodHRwOi8vbG9jYWxob3N0OjUxNzMnLFxuICB0aXRsZVRlbXBsYXRlOiAnJXMgLiBSYXpvciBLaXQnLFxuICBkZXNjcmlwdGlvbjogJ0FuIGFsbC1pbi1vbmUgV2FsbGV0IGtpdCBmb3IgZXZlcnkgTW92ZW1lbnQgRGFwcCcsXG4gIGVkaXRMaW5rOiB7XG4gICAgcGF0dGVybjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yYXpvcmxhYnNvcmcvd2FsbGV0LWtpdC1kb2NzL2VkaXQvbWFpbi9kb2NzLzpwYXRoJyxcbiAgICB0ZXh0OiAnU3VnZ2VzdCBjaGFuZ2VzIHRvIHRoaXMgcGFnZSdcbiAgfSxcbiAgaWNvblVybDogJy9mYXZpY29uLmljbycsXG4gIGxvZ29Vcmw6IHsgbGlnaHQ6ICcvbG9nby5wbmcnLCBkYXJrOiAnL2xvZ28ucG5nJyB9LFxuICByb290RGlyOiAnLicsXG4gIHNpZGViYXIsXG4gIHNvY2lhbHM6IFtcbiAgICB7XG4gICAgICBpY29uOiAnZ2l0aHViJyxcbiAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vcmF6b3JsYWJzb3JnL3Jhem9ya2l0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICdkaXNjb3JkJyxcbiAgICAgIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvcmF6b3JkYW8nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ3gnLFxuICAgICAgbGluazogJ2h0dHBzOi8veC5jb20vcmF6b3JkYW8nLFxuICAgIH0sXG4gIF0sXG4gIHRoZW1lOiB7XG4gICAgYWNjZW50Q29sb3I6IHtcbiAgICAgIGxpZ2h0OiAnI2ZmOTMxOCcsXG4gICAgICBkYXJrOiAnI2ZmYzUxNycsXG4gICAgfSxcbiAgfSxcbiAgdG9wTmF2OiBbXG4gICAgeyB0ZXh0OiAnRG9jcycsIGxpbms6ICcvZG9jcy9nZXR0aW5nLXN0YXJ0ZWQnLCBtYXRjaDogJy9kb2NzJyB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdFeHRlbnNpb25zJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQWNjb3VudCBBYnN0cmFjdGlvbicsXG4gICAgICAgICAgbGluazogJy9hY2NvdW50LWFic3RyYWN0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdPUCBTdGFjaycsXG4gICAgICAgICAgbGluazogJy9vcC1zdGFjaycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnWktzeW5jJyxcbiAgICAgICAgICBsaW5rOiAnL3prc3luYycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXhwZXJpbWVudGFsJyxcbiAgICAgICAgICBsaW5rOiAnL2V4cGVyaW1lbnRhbCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vd2V2bS92aWVtL3RyZWUvbWFpbi9leGFtcGxlcycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBwa2cudmVyc2lvbixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBgTWlncmF0aW5nIHRvICR7dG9QYXRjaFZlcnNpb25SYW5nZShwa2cudmVyc2lvbil9YCxcbiAgICAgICAgICBsaW5rOiBgL2RvY3MvbWlncmF0aW9uLWd1aWRlI18ke3RvUGF0Y2hWZXJzaW9uUmFuZ2UoXG4gICAgICAgICAgICBwa2cudmVyc2lvbixcbiAgICAgICAgICApLnJlcGxhY2UoL1xcLi9nLCAnLScpfS1icmVha2luZy1jaGFuZ2VzYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDaGFuZ2Vsb2cnLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vd2V2bS92aWVtL2Jsb2IvbWFpbi9zcmMvQ0hBTkdFTE9HLm1kJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDb250cmlidXRpbmcnLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vd2V2bS92aWVtL2Jsb2IvbWFpbi8uZ2l0aHViL0NPTlRSSUJVVElORy5tZCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9uYXRlL0RvY3VtZW50cy9HaXRIdWIvd2FsbGV0LWtpdC1kb2NzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9uYXRlL0RvY3VtZW50cy9HaXRIdWIvd2FsbGV0LWtpdC1kb2NzL3NpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbmF0ZS9Eb2N1bWVudHMvR2l0SHViL3dhbGxldC1raXQtZG9jcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHR5cGUgeyBTaWRlYmFyIH0gZnJvbSBcInZvY3NcIjtcblxuZXhwb3J0IGNvbnN0IHNpZGViYXI6IFNpZGViYXIgPSB7XG4gICcvZG9jcy8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0ludHJvZHVjdGlvbicsXG4gICAgfVxuICBdXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVCxTQUFTLG9CQUFvQjs7O0FDRXpVLElBQU0sVUFBbUI7QUFBQSxFQUM5QixVQUFVO0FBQUEsSUFDUjtBQUFBLE1BQ0UsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQ0Y7OztBRExBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxFQUNQLFNBQVMsUUFBUSxJQUFJLGFBQWEsZUFDOUIsZ0NBQ0E7QUFBQSxFQUNKLGVBQWU7QUFBQSxFQUNmLGFBQWE7QUFBQSxFQUNiLFVBQVU7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsRUFDVCxTQUFTLEVBQUUsT0FBTyxhQUFhLE1BQU0sWUFBWTtBQUFBLEVBQ2pELFNBQVM7QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsYUFBYTtBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixFQUFFLE1BQU0sUUFBUSxNQUFNLHlCQUF5QixPQUFPLFFBQVE7QUFBQSxJQUM5RDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU0sSUFBSTtBQUFBLE1BQ1YsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU0sZ0JBQWdCLG9CQUFvQixJQUFJLE9BQU8sQ0FBQztBQUFBLFVBQ3RELE1BQU0sMEJBQTBCO0FBQUEsWUFDOUIsSUFBSTtBQUFBLFVBQ04sRUFBRSxRQUFRLE9BQU8sR0FBRyxDQUFDO0FBQUEsUUFDdkI7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
