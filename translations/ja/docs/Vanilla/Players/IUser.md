# IUser

IUser インターフェイスは内部的に使用されており、1 つのタイプの Minecraftコンソール、通常のユーザー、コマンドブロックなど、さまざまなユーザタイプを組み合わせることができます。  
あなたはおそらくこれを必要とするでしょう。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.player.IUser;`

## 拡張する ICommandSender

IUser extends [ICommandSender](/Vanilla/Commands/ICommandSender/). つまり、 [ICommandSender](/Vanilla/Commands/ICommandSender/) オブジェクトで利用可能なすべての関数は IUser Object でも利用可能です。

## メソッド

現在、IUser オブジェクトには個別の関数はありません。