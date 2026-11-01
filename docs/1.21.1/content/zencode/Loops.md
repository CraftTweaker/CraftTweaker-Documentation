# Loops

Loops allow you to execute the same code multiple times.

They are useful when you need to process every element in an array or list, or when you need both the index and the value of each element.

## Looping over elements

Use a `for` loop to execute code for every element in an array or list.

```zenscript
var names = ["Alex", "Steve", "Mojang"] as string[];

for name in names {
    println(name);
}
