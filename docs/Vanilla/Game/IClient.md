#  客户端（IClient）

客户端接口可以提供客户端信息。 
它只适用于客户端，在服务器上不起作用！

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明 [数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.api.IClient;`

## 哪里能找到客户端类（client class）?
客户端类是一个全局适用的标识，所以你无需导入任何东西，只需要使用关键字`client`即可。

## 可以用它做什么？
`client.player` 将返回运行客户端的[玩家](/Vanilla/Players/IPlayer)对象。
`client.language` 将以字符串形式返回客户端运行的语言。
