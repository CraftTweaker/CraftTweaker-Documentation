# IClient

客户端接口是为了提供客户端的一般信息。  
这仅适用于客户端，这些客户端将无法工作！

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftminstruer.api.IClient；`

## 在哪里找到客户端类？

客户端类是一个全局注册符号，所以您不需要导入任何东西，您只能使用关键字 `客户端`

## 如何处理？

`client.player` 返回运行客户端的玩家为 [IPlayer](/Vanilla/Players/IPlayer/) 对象。  
`client.langue` 返回客户端作为字符串使用的语言。