# CIDR (Classless Inter-Domain Routing)

## Why CIDR Was Introduced

Classful networking wasted many IP addresses.

Example:
- company needs 500 IP addresses
- Class C too small
- Class B too large

CIDR solved this issue.

---

## CIDR Notation

Example:

```text
192.168.1.0/24
```

Meaning:
- first 24 bits => network
- remaining 8 bits => hosts

Binary:

```text
11000000 10101000 00000001 00000000
<------------ 24 bits ------------>
```

---

## Host Calculation

Hosts:

```text
2^8 = 256
```

Usable hosts:

```text
254
```

---

## Common CIDR Ranges

| CIDR  | Total Hosts | Usable Hosts |
| ----- | ----------- | ------------ |
| `/24` | 256         | 254          |
| `/25` | 128         | 126          |
| `/26` | 64          | 62           |
| `/27` | 32          | 30           |
| `/28` | 16          | 14           |

---

## Example

```text
192.168.1.0/26
```

Provides:

```text
64 total addresses
62 usable hosts
```