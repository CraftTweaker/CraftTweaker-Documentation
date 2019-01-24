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

After you have successfully located your future file's path, navigate to the folder that will contain the file in GitHub, if it exists.  
Don't worry if it does not exist, you can still create the file.

Say you want to create a file called `Secret_Information.md` in `docs/AdvancedFunctions`:  
Find the path in GitHub and click `Create new file` ![Create File Button](/Contribute/assets/OnlineEditor_CreateFileButton.png)

You are now presented with the new File editor page.  
First, on the top you can see the path of the file that will be created. If we want the file to be created in exactly the directory that is shown in the path, we only need to provide a file title and extension. Remember, all wiki entry files should have the `.md` extension, since this wiki uses markdown.

If you want the file to be created in a (possibly nonexisting) subfolder, or even multiple folders down the path, you can use `/` to separate folder names (like you can already see in the given path).

The Editor allows you to create the file as you like, and also to directly view a preview of the compiled formatting.

If the syntax of the files is new for you, the wiki uses MarkDown. There should be many tutorials to find using google (or you could add one right here to this wiki if you like).

## Add the file to the index

After you have created the file and commited the creation (see below) you will need to add the file to the index as well, so that it can be shown in the navigation bar later.

This index is the `mkdocs.yml` file.

This file contains everything that is needed to create the wiki, and you need to make sure not to break it (though we will tell you if your PR breaks a build should it come to that)!

All you need to do is add your file and categories to the `pages` list.  
The format is pretty straight-forward:

- Entries start with a `-`
- Then comes the (shown, English) name for the group or entry, followed by a `:`
- If you are creating a grouping (e.g. `Vanilla` or `Mods`) proceed on the next line, with two spaces inlined.
- If you are creating an actual reference to a page file, add it on the same line, after the `:` and a space. Make sure to wrap it in single quotes `'` to ensure that the build works as expected. The path is relative to the `docs` folder, so `docs/Vanilla/Commands.md` becomes `Vanilla/Commands.md`.

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