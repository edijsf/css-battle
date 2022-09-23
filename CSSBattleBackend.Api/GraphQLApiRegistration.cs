using CSSBattleBackend.Api.HelloWorld;
using GraphQL;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSSBattleBackend.Api;

public static class GraphQLApiRegistration
{
    public static IServiceCollection AddCSSBattleApi(this IServiceCollection services)
    {
        services.AddGraphQL(b =>
        {
            b.AddSystemTextJson()
            .AddSchema<HelloWorldSchema>()
            .AddGraphTypes(typeof(HelloWorldQuery).Assembly);
        });

        services.AddSingleton<HelloWorldTestRepository>();

        return services;
    }
}
