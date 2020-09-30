# The Concept

Most of the uses of Math in ZenScript can be covered via the four basic operations: addition, subtraction, multiplication, and division. ZenScript also provides access to the `pow` function, which performs the power operation. But that's it. More advanced mathematical operations cannot be performed, and would require a full reimplementation with lookup tables and wouldn't benefit from the hardware's optimizations in that regard, especially for modern CPUs.

This is where ZenScriptX Math comes in, providing a set of classes and some basic arithmetic operations that may be of general usefulness, while also benefitting in the most part from hardware optimizations, since most of those are implemented on a native level (via a couple of indirections due to the VM ZenScript runs on).

Every documentation section will provide the user with a list of provided functions and their behavior.

The current list of provided classes that are implemented are:

- [Math](/Mods/Boson/Math/Math/) for common mathematical functions (e.g., sine, cosine, logarithm...)
