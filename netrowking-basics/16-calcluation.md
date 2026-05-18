# Broadcast and Network IP Calculation

## Example 1 — `/24` Subnet

Consider the following network:

```text
Network Address : 172.16.2.0/24
Subnet Mask     : 255.255.255.0
```

---

## Understanding `/24`

A `/24` subnet means:
- First 24 bits are used for the network portion
- Remaining 8 bits are used for hosts

```text
24 network bits + 8 host bits = 32 bits total
```

The last octet contains the host portion:

```text
XXXXXXXX
```

This means the last octet can range from:

```text
0 → 255
```

---

## Network Address

When all host bits are `0`:

```text
00000000 = 0
```

So the network address becomes:

```text
172.16.2.0
```

---

## Broadcast Address

When all host bits are `1`:

```text
11111111 = 255
```

So the broadcast address becomes:

```text
172.16.2.255
```

---

## Usable Host Range

Usable device IPs are:

```text
172.16.2.1 → 172.16.2.254
```

| Type              | Address      |
| ----------------- | ------------ |
| Network Address   | 172.16.2.0   |
| First Usable IP   | 172.16.2.1   |
| Last Usable IP    | 172.16.2.254 |
| Broadcast Address | 172.16.2.255 |

---

# Example 2 — `/22` Subnet

Consider the following network:

```text
Network Address : 172.16.2.0/22
Subnet Mask     : 255.255.252.0
```

---

# Understanding `/22`

A `/22` subnet means:
- First 22 bits are used for the network
- Remaining 10 bits are used for hosts

```text
22 network bits + 10 host bits = 32 bits total
```

---

# Subnet Mask Breakdown

| Octet     | Network Bits | Decimal Value |
| --------- | ------------ | ------------- |
| 1st Octet | 8            | 255           |
| 2nd Octet | 8            | 255           |
| 3rd Octet | 6            | 252           |
| 4th Octet | 0            | 0             |

Therefore:

```text
11111111.11111111.11111100.00000000
```

becomes:

```text
255.255.252.0
```

---

# Why is it `252`?

In the 3rd octet:
- 6 bits are `1`
- 2 bits are `0`

Binary:

```text
11111100
```

Decimal conversion:

```text
128 + 64 + 32 + 16 + 8 + 4 = 252
```

Another quick way:

```text
2^8 - 2^2 = 256 - 4 = 252
```

Because:
- total possible values in 8 bits = 256
- last 2 bits are host bits

---

# Finding the Broadcast Address

Subnet mask:

```text
255.255.252.0
```

Interesting octet = 3rd octet

Block size:

```text
256 - 252 = 4
```

Subnet ranges increase in multiples of 4:

```text
0, 4, 8, 12, 16 ...
```

Given network:

```text
172.16.2.0/22
```

The subnet actually starts at:

```text
172.16.0.0
```

Next subnet begins at:

```text
172.16.4.0
```

Therefore the broadcast address is:

```text
172.16.3.255
```

---

# Address Range Summary

| Type              | Address      |
| ----------------- | ------------ |
| Network Address   | 172.16.0.0   |
| First Usable IP   | 172.16.0.1   |
| Last Usable IP    | 172.16.3.254 |
| Broadcast Address | 172.16.3.255 |

---

# Important Observation

Even though the IP given was:

```text
172.16.2.0/22
```

the actual subnet boundary is:

```text
172.16.0.0/22
```

because `/22` subnets increment by blocks of `4` in the 3rd octet.

Subnet blocks:

```text
172.16.0.0/22
172.16.4.0/22
172.16.8.0/22
...
```

`172.16.2.0` falls inside:

```text
172.16.0.0 → 172.16.3.255
```