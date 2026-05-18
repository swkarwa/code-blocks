# VLSM (variable length subnet mask)

It is a subnet technique that allows network to use different subnet masks based
Instead of allocating same subnet size everywhere, VLSM helps:
- Reduce IP address wattage
- create efficient subnet allocations
- Design sclabale netrowks
---
Example:
Consider a head office network (N)
```text
Network address : 172.16.1.0/24
Subnet mask : 255.255.255.0
```

### IP Address BreakDown
| Type              | Count |
| ----------------- | ----- |
| Total IP address  | 256   |
| Network Address   | 1     |
| Braodcast Address | 1     |
| Usable Host IP    | 254   |

### Explanation

A `/24` subnet means:
- First 24 bits are for network
- Remaning are for hosts

Total addresses:
```text
2^8 = 256
```
Usable hosts:
```text
256-2 = 254
```
## Branch office network (N1)

```text
Network address : 172.16.2.0/24
Subnet Mask : 255.255.255.0
```

### Host capacity
| Type                | Count |
| ------------------- | ----- |
| Total IP addresses  | 256   |
| Usable IP addresses | 254   |

## Branch office network (N2)

```text
Network address : 172.16.3.0/24
Subnet Mask : 255.255.255.0
```

### Host capacity
| Type                | Count |
| ------------------- | ----- |
| Total IP addresses  | 256   |
| Usable IP addresses | 254   |

### Why VLSM is important .?

Wihout VLSM
- Every subnet gets the same size
- IP addresses are wasted

With VLSM
- Small offices can use maller subnets
- Larget offices can use larger subnets
- Better utilization of available IP addresses

# Real World Eample

| Office Type  | Required hosts | Suggested CIDR |
| ------------ | -------------- | -------------- |
| Head office  | 200            | /24            |
| Small office | 50             | /26            |
| Tiny office  | 10             | /28            |

this allows efficient IP addressing without wasting IP addresses

Now Each office has Links l1 , l2, l3

Link 1:
```text
Network address - 172.16.200.0/30
Subnet mask : 255.255.255.252
```
Link 2:
```text
Network address - 172.16.200.8/30
Subnet mask : 255.255.255.252
```
Link 3:
```text
Network address - 172.16.200.4/30
Subnet mask : 255.255.255.252
```