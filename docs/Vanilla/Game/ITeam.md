# 团队（ITeam）

如果你连团队都不知道是什么，那么你也许是个极为孤独的人。

## 导入相关包

为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。    
`import crafttweaker.game.ITeam;`

## ZenGetters

|      Getter 名称       |     类型      |      备注      |
| :--------------------: | :-----------: | :------------: |
|          name          |    string     |    团队名称    |
|   allowFriendlyFire    |     bool      |  允许队友伤害  |
|      colorPrefix       |    string     |    前缀颜色    |
|  membershipCollection  | List<string\> |    团队成员    |
| deathMessageVisibility |    string     | 死亡信息可见性 |
|     collisionRule      |    string     |      规则      |

## ZenMethods

- `formatString(string input);` → 格式化输入团队的字符串，返回格式化后的字符串。