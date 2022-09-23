using CSSBattleBackend.Api.Constants;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSSBattleBackend.Api.HelloWorld;

public class HelloWorldMutation : ObjectGraphType<object>
{
    public HelloWorldMutation()
    {
        Name = GraphQLTestParams.Mutation;
    }
}
