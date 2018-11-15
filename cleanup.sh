echo "Removing previous builds";
rm -fr ./build/*;

echo "git cleanup";
git clean -df;

echo "git hard-reset";
git reset --hard;