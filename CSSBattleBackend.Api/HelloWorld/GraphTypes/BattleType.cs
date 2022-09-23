using CSSBattleBackend.Api.Types.CSSBattle;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSSBattleBackend.Api.HelloWorld.GraphTypes;

public class BattleType : ObjectGraphType<Battle>
{
    public BattleType(HelloWorldTestRepository repository)
    {
        Name = "Battle";
        Field<NonNullGraphType<IntGraphType>>("Id")
            .Description("Battle Id")
            .Resolve(c => c.Source.Id);

        Field<StringGraphType>("Name")
            .Description("Battle name")
            .Resolve(c => c.Source.Name);

        Field<StringGraphType>("ImageUrl")
            .Description("Battle ImageUrl")
            .Resolve(c => c.Source.ImageUrl);
    }
}
