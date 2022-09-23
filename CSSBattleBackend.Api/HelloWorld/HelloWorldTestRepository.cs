using CSSBattleBackend.Api.Types.CSSBattle;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSSBattleBackend.Api.HelloWorld;

public class HelloWorldTestRepository
{
    public HelloWorldTestRepository() { }

    public IEnumerable<Battle> GetBattles()
    {
        List<Battle> result = new();

        return result;
    }

    public Battle GetBattle(int id)
    {
        return new Battle
        {
            Id = id,
            Name = "Test",
            ImageUrl = "TestUrl"
        };
    }
}
