# ITeam

あなたがチームが何であるかを知らなければ、あなたは恐ろしい人です。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.game.ITeam;`

## ZenGetters

| 取得者名                   | タイプ           |
| ---------------------- | ------------- |
| 名前                     | 文字列           |
| allowFriendlyFire      | bool          |
| colorPrefix            | 文字列           |
| membershipCollection   | リスト<string\> |
| deathMessageVisibility | 文字列           |
| collisionRule          | 文字列           |

## ZenMethods

- `formatString(string input);` → チームの入力文字列の書式を設定します。 フォーマットされた文字列を返します。