# 使用 GitHub 的在线编辑器创建文件

## 需求

您需要有一个 github 帐户，并[将 wiki 复制到您的帐户中](/Contribute/SetupGithub)。

## 介绍

GitHub 的在线编辑器允许你在只有浏览器的情况下创建和编辑文件。  
虽然它的功能不如[使用本地副本](/Contribute/LocalClone/CreateCommit/)强大，但你也因此免去了[设置 git ](/Contribute/LocalClone/InstallingGit/)会产生的相关问题。

这篇指南将会向你展示如何使用 GitHub 的在线编辑器创建新的文档。  
添加新页面的主要原因可能是补充缺失的信息，但也可能是给模组处理程序添加一个示例条目。无论出于何种原因这里欢迎大家做出更改并最终[提交 Pull Request](/Contribute/PullRequest)。

但请记住，你只能创建英文版文档，翻译将通过 [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/) 处理（但需要等到英文页面合并之后才能翻译）。

## 文档创建的位置

从理论上讲，文件放在哪里并不重要，但还是希望任何人符合当前的规范：

- 所有文件都需要放在 `docs` 文件夹中。
- 文件结构应与导航栏相匹配。 例：在 wiki 的导航栏中, `ICraftingRecipe` 可以通过路径 `Vanilla/Recipes/Crafting Table Recipes/ICraftingRecipe` 中找到。 ICraftingRecipe 文档可以通过 `docs/Vanilla/Recipes/Crafting/ICraftingRecipe.md` 路径找到。 正如您所看到的。这些路径并不完全匹配，但它们足以找到这个文件。
- 一个模组的所有信息都应保存在一个组/文件夹下。

## 创建文件

成功确定文件的路径后，你需要前往包含这个文件的现有文件夹。  
如果它不存在也不必担心，你仍然可以创建这个文件。

例如你需要在 `docs/AdvancedFunctions` 文件夹下创建一个名为 `Secret_Information.md` 的文件：  
在 GitHub 中找到它的路径，并点击 `Create new file` ![创建文档按钮](/Contribute/assets/OnlineEditor_CreateFileButton.png)

你会进入一个新的文件编辑器页面。  
首先，在最顶端是文件的路径。 如果我们希望在显示的路径中创建文件，则只需提供文件的标题和扩展名。 请记住，所有 wiki 条目文件的扩展名一律为 `.md` ，因为此 wiki 使用 markdown。

如果希望在（可能不存在的) 子文件夹中创建文件，甚至在该路径下创建多个文件夹，则需要使用 `/` 来分隔文件夹的名称 （就像您已经可以在现有路径中看到的那样）。

这个编辑器允许你如你所愿的创建文件，也提供编译后的预览版本。

如果你不熟悉文件的语法， wiki 使用的是 Markdown 语法。 谷歌上应该有很多教程（如果你想的话，也可以在这个 wiki 上添加教程页面）。

## 将文件添加到索引中

创建并提交文件后（见下），你还需要将该文件添加到索引中，以便以后可以在导航栏中显示该文件。

索引指 `mkdocs.yml` 文件。

此文件包含创建 wiki 所需的所有内容, 您需要确保不要破坏它 （尽管出现了这种情况，系统也会告诉你你的 PR 中断了 wiki 的创建）！

您只需将文件和类别添加到 `pages` 列表。   
格式也很简单明了：

- 条目都以后面的这个符号开始 `-`
- 然后是条目或者类别的 （显示的英语）名称，后面再接上 `: `
- 如果你创建了一个类别（例：`原版`或`模组`），就可以直接换行，下一行文字在与上一行对齐后在文字前面添加两个空格。
- 如果这个索引指的是一个页面，在同一行的后面加上`:`，补上一个空格，然后再添加路径。 记得在路径两段加上单引号`'`，使得系统能够识别。 路径是与`docs`文件夹的相对位置，所以 `docs/Vanilla/Commands.md` 需要写成 `Vanilla/Commands.md`。

具体例子请查看 [当前 github 上的 mkdocs.yml 文件](https://github.com/CraftTweaker/CraftTweaker-Documentation/blob/master/mkdocs.yml)。 或者，你也可以编辑这个页面并补充一个例子。

## 保存/提交更改

*注：这段描述源自编辑文件页面，但内容是相通的。如果你认为有必要替换这一部分，也欢迎作出更改*

创建文件后，你需要让 GitHub 知道你要保存所做的更改。

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

在作出更改后，你可以使用在线编辑器继续[编辑](/Contribute/OnlineEditor_Edit)或者创建更多文档。  
当你做完了所有个更改，你就可以[提交 Pull Request](/Contribute/PullRequest)。