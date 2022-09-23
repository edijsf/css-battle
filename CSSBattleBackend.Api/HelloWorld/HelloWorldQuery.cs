using CSSBattleBackend.Api.Constants;
using CSSBattleBackend.Api.HelloWorld.GraphTypes;
using GraphQL;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSSBattleBackend.Api.HelloWorld;

public class HelloWorldQuery : ObjectGraphType<object>
{
    public HelloWorldQuery(HelloWorldTestRepository repository)
    {
        Name = GraphQLTestParams.Query;

        Field<BattleType>("Battle").Argument<NonNullGraphType<IntGraphType>>("Id", "Battle Id").Resolve(
            c => repository.GetBattle(c.GetArgument<int>("Id"))
        );
    }
}
