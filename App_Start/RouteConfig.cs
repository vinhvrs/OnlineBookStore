using System.Web;
using System.Web.Routing;
using Microsoft.AspNet.FriendlyUrls;

namespace OnlineBookstore
{
    public static class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            // Enable Friendly URLs with the specified settings globally
            var settings = new FriendlyUrlSettings();
            settings.AutoRedirectMode = RedirectMode.Permanent;
            routes.EnableFriendlyUrls(settings);
        }
    }
}
