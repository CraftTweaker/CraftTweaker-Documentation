# 安装Git

为了让您能够[clone你fork的项目到本地](/Contribute/LocalClone/Clone/)，你需要安装Git。  
Git 是一个分布式版本控制系统( 事实上，Github, BitBucket 和绝大多数源代码托管网站都使用Git)。

## 获取Git

您可以打开命令提示符并执行命令`git`来检查是否已安装Git  
如果显示了指令帮助页面，这代表你已经安装了Git，请跳过这一阶段  
如果未显示帮助页面，而是返回类似于“Git不是可用的程序”，这说明您尚未安装Git或者未将其添加至PATH（环境变量）中（请参见下文） 在这样的情况下，您需要安装git或将其添加到您的路径：  
![CMD Prompt issuing git command without git being installed](/Contribute/LocalClone/assets/CMD_noGit.png)

### 下载并安装Git

If you do not have git installed, then you can download the installer from [their official page](https://git-scm.com/downloads/).  
Choose your Operation System, download the installer, run it and follow the instructions.  
If you are not sure on which options to check, leave them as default.  
If you cannot proceed after setting your preferred text editor, go back one page and then go forward to the page again, in some cases this will make the `next` button appear.

### Adding Git to your PATH

After you have installed Git, it should be added to your PATH. If not, first try to close and open your command prompt.  
If it still tells you it doesn't know git, restart your computer.  
If it still tells you it doesn't know git, you may need to add it to your path.

I won't cover how to add it in detail, all you need to do is add the directory where you installed git to as path.  
If you for example installed Git to `C:\Program Files\Git` you will need to add `C:\Program Files\Git\cmd` to your path.  
Afterwards restart your command prompt or your computer.

Technically, this is not required but it makes some commands easier.

## 下一步该做什么

Now that you have installed git you can [clone your forked repository](/Contribute/LocalClone/Clone/).