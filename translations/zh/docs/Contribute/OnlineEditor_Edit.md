# 使用 GitHub 的在线编辑器编辑文件

## 需求

您需要有一个 github 帐户，并[将 wiki 复制到您的帐户中](/Contribute/SetupGithub)。

## 介绍

GitHub 的在线编辑器允许你在只有浏览器的情况下修改和创建文件。  
虽然这种方法实现的功能不如在本地编辑多，但你不需要考虑包括设置 git 等诸多操作。

这篇指南将会向你展示如何使用 GitHub 的在线编辑器编辑现有的文件。  
你可能会出于改正拼写错误，提交一个更好的例子等理由编辑一个页面。无论出于何种原因，这里欢迎大家做出更改并最终 [提交 Pull Request](/Contribute/PullRequest)。

但请记住，你只能编辑英文版文件，翻译将通过 [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/) 处理。

## 找到该文件

如果要编辑现有文件，首先需要找到该文件。

在大多数情况下，你可以通过它的 Wiki Url 找到该文件。

经验法则： ` # ` 指的是文档文件夹，之后的所有内容都是嵌套文件夹，最后才是文件。

例如，Url 为以下地址的文件  
[https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/](https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/)  
可以在以下位置被找到  
`docs/AdvancedFunctions/Arrays_and_Loops.md`

## 编辑该文件

成功找到文件后，单击它会在 github 的文件视图中打开这个文件。  
这里您可以看到 wiki 条目的大致内容，但它不包含没有导航栏，因为这只是条目内容。

点击小笔图标打开编辑器: ![编辑按钮](/Contribute/assets/OnlineEditor_EditButton.png)

这个编辑器允许你如你所愿的修改这个文件，也提供编译后的预览版本。 此预览左侧有彩色条形图，它们分别指示:

- 绿色：此部分以前不在此页上。
- 黄色: 此部分以前存在于此页上，但已更改，例如更正了拼写错误，或提供了其他信息。
- 红色: 此部分以前存在于此页上，但已被删除。
- 无：此部分未被更改。

如果你不熟悉文件的语法， wiki 使用的是 Markdown 语法。 谷歌上应该有很多教程（如果你想的话，也可以在这个 wiki 上添加教程页面）。

## 保存/提交更改

更改文件后，你需要让 GitHub 知道你要保存所做的更改。

这就是提交区的功能：  
你不能简单的直接存储这个文件，你需要提供你所做变更的概述（提交标题）和一段（可选的）描述用以添加额外的信息，例如你为什么作出此更改或者具体被更改了哪些内容。

默认情况下，它大致如下图所示:  
![默认的提交框](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

在此示例中，提交标题 (或编辑摘要) 为 `Update Arrays_and_Loops.md`。 GitHub 不知道你做了什么更改，所以它会生成这段通用的描述。

您可能需要添加其他标题或说明，这虽然不是必要的，但这可以让人更加轻松的查看你之后提交的 Pull Request。

如果你的 GitHub 帐户关联了多个电子邮件地址，你可以选择你做出修改的电子邮件地址。 这不会对做出的贡献产生任何的影响。  
你还可以决定是直接提交到 master branch（主分支），还是创建一个新 branch（分支）并提交到新分支上 。 在大多数情况下，你只需要提交到 master branch 上即可。

填写完毕的示例类似于下图所示： ![填写完的提交框](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)

## 下一步该做什么

在作出更改后，你可以使用在线编辑器继续编辑或者[创建](/Contribute/OnlineEditor_Create)更多文档。  
当你做完了所有个更改，你就可以[提交 Pull Request](/Contribute/PullRequest)。