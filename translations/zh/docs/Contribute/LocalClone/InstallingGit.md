# 安装Git

为了让您能够[clone你fork的项目到本地](/Contribute/LocalClone/Clone/)，你需要安装Git。  
Git 是一个分布式版本控制系统( 事实上，Github, BitBucket 和绝大多数源代码托管网站都使用Git)。

## 获取Git

您可以打开命令提示符并执行命令`git`来检查是否已安装Git  
如果显示了指令帮助页面，这代表你已经安装了Git，请跳过这一阶段  
如果未显示帮助页面，而是返回类似于“Git不是可用的程序”，这说明您尚未安装Git或者未将其添加至PATH（环境变量）中（请参见下文） 在这样的情况下，您需要安装git或将其添加到您的路径：  
![CMD Prompt issuing git command without git being installed](/Contribute/LocalClone/assets/CMD_noGit.png)

### 下载并安装Git

如果您尚未安装git，可以从[Git的官方页面](https://git-scm.com/downloads/)来下载，或自行前往镜像站寻找镜像。 选择您的操作系统，下载安装程序，运行安装程序并按照说明进行操作。  
如果您不确定要检查哪些选项，请将其保留为默认值，除了首选文本编辑器。  
我们建议您将首选文本编辑器设置为自己最常用的那一个，并且在选择文本编辑器之前确认您已经安装了对应的编辑器。如果设置了首选的文本编辑器后无法继续操作（例如next按钮变灰），请返回上一页，然后再次前进到该页面。在某些情况下，这会使`next（继续）`按钮正常工作。

### 添加Git到您的 PATH

After you have installed Git, it should be added to your PATH. If not, first try to close and open your command prompt.  
If it still tells you it doesn't know git, restart your computer.  
If it still tells you it doesn't know git, you may need to add it to your path.

I won't cover how to add it in detail, all you need to do is add the directory where you installed git to as path.  
If you for example installed Git to `C:\Program Files\Git` you will need to add `C:\Program Files\Git\cmd` to your path.  
Afterwards restart your command prompt or your computer.

Technically, this is not required but it makes some commands easier.

## 下一步该做什么

Now that you have installed git you can [clone your forked repository](/Contribute/LocalClone/Clone/).