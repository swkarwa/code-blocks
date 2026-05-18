# Subnet Mask

A subnet mask is used to identify:
1. which portion of an IP address represents the network
2. which portion represents the host (device)

Without a subnet mask, a device cannot determine:
- whether another device is in the same network
- or whether it must send packets to a router

---

# Why Subnet Mask is Needed

Consider the IP address:

```text
192.168.1.10
```

Just by looking at the IP address, we cannot know:
- which part is network
- which part is host

This is where subnet mask helps.

Example:

```text
IP Address  : 192.168.1.10
Subnet Mask : 255.255.255.0
```

---

# Binary Representation

IP Address:

```text
192.168.1.10
```

Binary:

```text
11000000 10101000 00000001 00001010
```

Subnet Mask:

```text
255.255.255.0
```

Binary:

```text
11111111 11111111 11111111 00000000
```

---

# Meaning of 1 and 0 in Subnet Mask

In subnet mask:

- `1` means network bit
- `0` means host bit

Example:

```text
11111111 11111111 11111111 00000000
```

This means:

```text
<------ Network ------> <Host>
11111111 11111111 11111111 00000000
```

So:
- first 24 bits belong to network
- last 8 bits belong to hosts

Equivalent CIDR notation:

```text
/24
```

because there are 24 network bits.

---

# Finding Network Portion

IP Address:

```text
192.168.1.10
```

Subnet Mask:

```text
255.255.255.0
```

Network portion:

```text
192.168.1
```

Host portion:

```text
10
```

So the device belongs to network:

```text
192.168.1.0/24
```

---

# Another Example

```text
IP Address  : 172.16.5.10
Subnet Mask : 255.255.0.0
```

Binary subnet mask:

```text
11111111 11111111 00000000 00000000
```

Meaning:
- first 16 bits => network
- remaining 16 bits => hosts

Network portion:

```text
172.16
```

Host portion:

```text
5.10
```

Equivalent CIDR:

```text
/16
```

---

# Common Subnet Masks

| Subnet Mask       | CIDR  | Usable Hosts |
| ----------------- | ----- | ------------ |
| `255.0.0.0`       | `/8`  | 16777214     |
| `255.255.0.0`     | `/16` | 65534        |
| `255.255.255.0`   | `/24` | 254          |
| `255.255.255.128` | `/25` | 126          |
| `255.255.255.192` | `/26` | 62           |

---

# How Devices Use Subnet Mask

Suppose a device has:

```text
IP Address  : 192.168.1.10
Subnet Mask : 255.255.255.0
```

Now it wants to communicate with:

```text
192.168.1.20
```

Using subnet mask:
- source network => `192.168.1`
- destination network => `192.168.1`

Both are same.

Therefore:
- destination is in same network
- packet is sent directly
- router is NOT required

---

Now suppose destination is:

```text
192.168.2.20
```

Source network:

```text
192.168.1
```

Destination network:

```text
192.168.2
```

Networks are different.

Therefore:
- packet must be sent to router
- router forwards packet to another network

---

# Why Subnetting is Important

Subnet masks help:
- divide large networks into smaller networks
- reduce broadcast traffic
- improve performance
- improve security
- efficiently use IP addresses

Example:

Instead of using one huge network:

```text
192.168.1.0/24
```

we can split it into:

```text
192.168.1.0/26
192.168.1.64/26
192.168.1.128/26
192.168.1.192/26
```

This creates 4 smaller subnetworks.