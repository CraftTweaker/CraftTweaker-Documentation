# 使用 GitHub 的在线编辑器创建文件

## 需求

您需要有一个 github 帐户，并[将 wiki 复制到您的帐户中](/Contribute/SetupGithub)。

## 介绍

GitHub 的在线编辑器允许你在只有浏览器的情况下修改和创建文档。  
虽然这种方法实现的功能不如在本地编辑多，但你不需要考虑包括设置 git 等诸多操作。

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
在 GitHub 中找到它的路径，并点击 `Create new file` ![Create File Button](/Contribute/assets/OnlineEditor_CreateFileButton.png)

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
- 如果这个索引指的是一个页面，在同一行的后面加上`:`，补上一个空格，然后再添加地址。 Make sure to wrap it in single quotes `'` to ensure that the build works as expected. The path is relative to the `docs` folder, so `docs/Vanilla/Commands.md` becomes `Vanilla/Commands.md`.

For examples check the [current mkdocs.yml file on github](https://github.com/CraftTweaker/CraftTweaker-Documentation/blob/master/mkdocs.yml). Alternatively, edit this file and add your own example here.

## Save/Commit the changes

*Note: This description originates from the edit files guide but the same principles apply, feel free to substitute with your own version if needed*

After you have created the file content you need to let GitHub know that you want to save your changes.

That's what the commit box below your editor is for:  
You cannot simply save the file, you need to provide a summary of what you did (commit title) and optionally a short description where you can put additional information like why you did the changes or what exactly was changed.

By default it looks roughly like this:  
![Commit Box Default](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

In this example, the Commit title (or edit summary) is `Update Arrays_and_Loops.md`. GitHub cannot know what your actual changes were supposed to do, so it tries something as generic as this.

You might want to add an additional title or description, but it is not neccessary, though it makes reviewing your Pull request later on easier.

If you have multiple e-mail addresses registered for your GitHub account, you can choose as which one you will create the commit. This will not have any real impact for contributing, though.  
You can also decide whether you want to commit directly to your master branch or rather create a new branch for your commit. In most cases committing to your master branch works just fine.

A filled out example might look like this: ![Commit box Filled](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)

## What to do next

After you have committed your changes, you can go on and [edit](/Contribute/OnlineEditor_Edit) or create more files using the online editor.  
After you have done all your changes, you can [file a Pull Request](/Contribute/PullRequest).