# 忽略括号错误预处理器

这个预处理器将你的脚本设置为忽略括号错误。  
这个预处理器不会以任何方式神奇地更正你的脚本，它只是禁用错误日志。

## 调用

You can call the IgnoreBracketErrors Preprocessor by placing `#ignoreBracketErrors` inside your script file.  
This Preprocessor is file-specific, so calling it on one file doesn't affect the others (at least not for what the processor's concerned.

## What it does

When the preprocessor is called on a file, all error logging on bracket errors will be supressed.  
This doesn't change the affected lines in any way, instead the only change is that your log won't contain the regarding lines.