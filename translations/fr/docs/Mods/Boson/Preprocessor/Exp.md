# Experimental Flags Preprocessor Directive

This preprocessor directive enables some experimental behavior for certain ZenScript functionalities.

Being part of the ZenScriptX project, and due to the experimental nature of the project in itself, some features may require extensive testing on the compiler side or cause other unintended side effects. For these reasons, some features have been deemed experimental and are not enabled by default when compiling a script.

Moreover, some experimental flags may outright not work, and are provided only as hints of upcoming features. You should always refer to the documentation to know whether a certain flag is used or not. On the other hand, experimental flags will never be removed, meaning that features that are integrated into the "non-experimental" part of ZenScriptX won't have their flags disabled. This allows scripts to be compatible with newer releases of the ZenScriptX project without requiring a rewrite.

## Using the directive
Using the directive is as simple as adding `#experimental` to the beginning of the file, and specifying a list of flags that represent behavior to enable right after the declaration.

Every flag must be separated by the others with spaces and it **has to** begin with `-E`. This identifies the flag as an experimental flag. Following that declaration, a series of letters and numbers that identify the specific flag should be entered. Refer to the list in this documentation to know all the available flags.

As an example, imagine we wanted to enable the `soo` and `wd4` flags. The corresponding line would be:
```zenscript
#experimental -Esoo -Ewd4
```

## List of flags
| Flag name | Current Status | Description                                                                           |
| --------- | -------------- | ------------------------------------------------------------------------------------- |
| `soo`     | Disabled       | Enables operator overloading for Sequences                                            |
| `saia`    | Disabled       | Provides an automatic `it` argument to functions with a single parameter in Sequences |
| `sao`     | Enabled        | Allows creation of `Sequences` from array arguments                                   |

The meaning for Current Status are the following:

- **Disabled** identifies a flag that exists but has no corresponding actions due to the backend not being ready. It is provided merely due to "roadmap", allowing developers to know what new features will be available in the near future.
- **Enabled** identifies a flag that exists and has an effect on the file.
- **Deprecated** identifies a flag that shouldn't be used anymore due to a feature reaching maturity and not being considered experimental anymore. It is nevertheless provided as a form of backwards compatibility.
