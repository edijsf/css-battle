using CSSBattleBackend.Api.Constants;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;

namespace CSSBattleBackend.Api.HelloWorld;

public class HelloWorldSchema : Schema
{
    public HelloWorldSchema(IServiceProvider serviceProvider) : base(serviceProvider)
    {
        Query = serviceProvider.GetRequiredService<HelloWorldQuery>();
        Mutation = serviceProvider.GetRequiredService<HelloWorldMutation>();
        Description = GraphQLTestParams.SchemaDescription;
    }
}