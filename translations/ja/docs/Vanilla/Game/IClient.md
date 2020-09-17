# IClient

クライアントインターフェイスはクライアントに関する一般的な情報を提供するためのものです。  
これはクライアントのみで利用できます。これらは複数のクライアントでは動作しません！

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.api.IClient;`

## クライアント・クラスはどこにありますか?

Clientクラスはグローバルに登録されたSymbolですので、何もインポートする必要はありません。キーワード `client` を使用するだけです。

## それで何をすべきか?

`client.player` returns the player running the client as an [IPlayer](/Vanilla/Players/IPlayer/) Object.  
`client.language` returns the language the client runs on as string.