# Why Device A Cannot Communicate with Device B

---

# Step 1: Understand the Network Topology

We have two networks:

```text
Network A : 172.16.0.0/24
Device A  : 172.16.0.4
```

and

```text
Network B : 172.16.1.0/24
Device B  : 172.16.1.7
```

Routers connecting them:

```text
R1 : 172.16.2.1
R2 : 172.16.2.20
```

Router link network:

```text
172.16.2.0/30
```

---

# Step 2: Understand `/24`

Example:

```text
172.16.0.0/24
```

CIDR `/24` means:

```text
24 bits are network bits
8 bits are host bits
```

Subnet mask:

```text
255.255.255.0
```

Binary:

```text
11111111.11111111.11111111.00000000
```

Meaning:
- first 3 octets = network
- last octet = host

So:

```text
172.16.0.4
```

belongs to network:

```text
172.16.0.0
```

because:
- `172.16.0` = network
- `4` = host/device

Similarly:

```text
172.16.1.7
```

belongs to:

```text
172.16.1.0
```

---

# Step 3: Device A Wants to Communicate with Device B

Source:

```text
172.16.0.4
```

Destination:

```text
172.16.1.7
```

Device A first checks:

```text
"Is destination inside my network?"
```

---

# Step 4: Device A Calculates Its Network

IP:

```text
172.16.0.4
```

Subnet mask:

```text
255.255.255.0
```

Binary IP:

```text
10101100.00010000.00000000.00000100
```

Binary mask:

```text
11111111.11111111.11111111.00000000
```

Now device performs AND operation.

---

# Step 5: AND Operation for Source

AND rule:

| Bit A | Bit B | Result |
| ----- | ----- | ------ |
| 0     | 0     | 0      |
| 0     | 1     | 0      |
| 1     | 0     | 0      |
| 1     | 1     | 1      |

Last octet:

IP:

```text
00000100
```

Mask:

```text
00000000
```

AND:

```text
00000100
00000000
---------
00000000
```

Result network:

```text
172.16.0.0
```

---

# Step 6: Device A Calculates Destination Network

Destination:

```text
172.16.1.7
```

Binary:

```text
10101100.00010000.00000001.00000111
```

Mask:

```text
11111111.11111111.11111111.00000000
```

Last octet AND:

```text
00000111
00000000
---------
00000000
```

Result:

```text
172.16.1.0
```

---

# Step 7: Compare Networks

Source network:

```text
172.16.0.0
```

Destination network:

```text
172.16.1.0
```

They are DIFFERENT.

Therefore:
- Device A understands destination is outside local network
- packet must be sent to router

So packet goes to:

```text
R1
```

---

# Step 8: Router-to-Router Communication

Routers communicate through:

```text
172.16.2.0/30
```

Now we must check whether:
- R1
- R2

belong to SAME subnet.

---

# Step 9: Understand `/30`

CIDR:

```text
/30
```

means:

```text
30 network bits
2 host bits
```

Subnet mask:

```text
255.255.255.252
```

Binary:

```text
11111111.11111111.11111111.11111100
```

Only 2 bits are available for hosts.

---

# Step 10: Why `2^2 = 4`

Host bits:

```text
2
```

Each bit can be:
- `0`
- `1`

Possible combinations:

| Bit 1 | Bit 2 |
| ----- | ----- |
| 0     | 0     |
| 0     | 1     |
| 1     | 0     |
| 1     | 1     |

Total:

```text
4 combinations
```

Formula:

```text
2^2 = 4
```

---

# Step 11: Addresses in `/30`

Subnet:

```text
172.16.2.0/30
```

Available addresses:

| Binary | Decimal | Address    |
| ------ | ------- | ---------- |
| 00     | 0       | 172.16.2.0 |
| 01     | 1       | 172.16.2.1 |
| 10     | 2       | 172.16.2.2 |
| 11     | 3       | 172.16.2.3 |

Meaning:

| Address    | Purpose   |
| ---------- | --------- |
| 172.16.2.0 | Network   |
| 172.16.2.1 | Host      |
| 172.16.2.2 | Host      |
| 172.16.2.3 | Broadcast |

So valid usable router IPs are ONLY:

```text
172.16.2.1
172.16.2.2
```

---

# Step 12: Check R1 Network

R1:

```text
172.16.2.1
```

Binary last octet:

```text
00000001
```

Mask:

```text
11111100
```

AND:

```text
00000001
11111100
---------
00000000
```

Result:

```text
172.16.2.0
```

So R1 belongs to:

```text
172.16.2.0/30
```

---

# Step 13: Check R2 Network

R2:

```text
172.16.2.20
```

Binary:

```text
00010100
```

Mask:

```text
11111100
```

AND:

```text
00010100
11111100
---------
00010100
```

Binary:

```text
00010100 = 20
```

Result network:

```text
172.16.2.20
```

So R2 belongs to:

```text
172.16.2.20/30
```

---

# Step 14: Final Comparison

R1 network:

```text
172.16.2.0/30
```

R2 network:

```text
172.16.2.20/30
```

They are DIFFERENT networks.

Therefore:
- routers cannot communicate directly
- R1 cannot forward packet to R2
- routing fails

Hence:

```text
Device A cannot communicate with Device B
```

---

# Step 15: Correct Configuration

Correct router configuration:

```text
172.16.2.0/30

R1 : 172.16.2.1
R2 : 172.16.2.2
```

Now both routers belong to SAME subnet:

```text
172.16.2.0/30
```

So communication succeeds.