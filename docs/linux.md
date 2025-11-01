## 🐧 Linux Commands
> I will use the command `fallocate` and `truncate` for the generation.

> [!NOTE]
> the -l stands for length/size and -s stands for size. | (it's L not I)
```
fallocate -l <Size> <Name>
```
### Command Examples
#### fallocate
```
fallocate -l 100M test.bin
```
> 100MB
---
```
fallocate -l 1G test.bin
```
> 1GB
---
```
fallocate -l 10G test.bin
```
> 10GB
---
#### truncate
```
truncate -s 100M test.bin
```
> 100MB
---
```
truncate -s 1G test.bin
```
> 1GB
---
```
truncate -s 10G test.bin
```
> 10GB
---