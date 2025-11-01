## Windows Commands

> Works in **CMD/Terminal**, **PowerShell**.

### Command

```powershell
fsutil file createnew test.bin 104857600
```
> The generated .bin file it would be 100MB
---
```powershell
fsutil file createnew test.bin 1073741824
```
> The generated .bin file it would be 1GB (1024MB, 1048576 KB, 1073741824B)
---
```powershell
fsutil file createnew test.bin 10737418240
```
> The generated .bin file it would be 10GB
---

> [!TIP]
> You can use any of the supported metric or binary ``for Example, 1024 Bytes = 1 Kilobyte`` units below to fit your test case.

```
B
KB
MB
GB
TB
```

> [!NOTE]
> Windows creates files using byte counts by default.
> For human‑readable units, newer versions of **PowerShell 5+** support suffixes like `B,` `KB,` `MB,` `GB,` `TB.`

### Modern PowerShell

```powershell
fsutil file createnew test.bin 100MB
```
```powershell
fsutil file createnew test.bin 1GB
```

```powershell
fsutil file createnew test.bin 10GB
```

> [!NOTE]
> Also these commands works on *`Terminal - Command Prompt`*