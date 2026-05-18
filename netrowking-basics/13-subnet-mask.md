# Subnetting Example

Given:

```text
IP Address      : 172.16.0.0
Original Mask   : 255.255.0.0
New Mask        : 255.255.240.0
```

---

## Step 1: Identify Original Network

Original subnet mask:

```text
255.255.0.0
```

Binary:

```text
11111111.11111111.00000000.00000000
```

CIDR notation:

```text
/16
```

Meaning:
- first 16 bits are network bits
- remaining 16 bits are host bits

---

## Step 2: Identify New Subnet Mask

New subnet mask:

```text
255.255.240.0
```

Binary:

```text
11111111.11111111.11110000.00000000
```

CIDR notation:

```text
/20
```

Meaning:
- first 20 bits are network bits
- remaining 12 bits are host bits

---

## Step 3: Calculate Borrowed Bits

Original network bits:

```text
16
```

New network bits:

```text
20
```

Borrowed bits:

```text
20 - 16 = 4 bits
```

These 4 bits are borrowed from host portion for subnetting.

---

## Step 4: Calculate Number of Subnets

Formula:

```text
2^(borrowed bits)
```

Calculation:

```text
2^4 = 16
```

Total subnets:

```text
16
```

---

## Step 5: Calculate Hosts Per Subnet

Remaining host bits:

```text
32 - 20 = 12 bits
```

Formula:

```text
2^(host bits)
```

Calculation:

```text
2^12 = 4096
```

Total addresses per subnet:

```text
4096
```

Usable host IP addresses:

```text
4096 - 2 = 4094
```

Reserved addresses:
1. Network address
2. Broadcast address

---

# Final Answer

| Item              | Value           |
| ----------------- | --------------- |
| Original Network  | `172.16.0.0/16` |
| New Network       | `172.16.0.0/20` |
| Borrowed Bits     | `4`             |
| Number of Subnets | `16`            |
| Hosts per Subnet  | `4094`          |

---

# Subnet Increment

Subnet increment:

```text
256 - 240 = 16
```

Subnets:

```text
172.16.0.0/20
172.16.16.0/20
172.16.32.0/20
172.16.48.0/20
...
172.16.240.0/20
```