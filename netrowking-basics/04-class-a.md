# Class A

Class A addresses are used for very large networks.

---

## Binary Pattern

In Class A:
- the first bit of the first octet is always `0`

Pattern:

```text
0XXXXXXX
```

There are 7 remaining bits.

Each bit can either be:
- `0`
- `1`

Total possible combinations:

```text
2^7 = 128
```

Therefore:
- total Class A networks = 128

---

## Network Range

```text
0.0.0.0 - 127.255.255.255
```

However:
- `0` is reserved
- `127` is reserved for loopback (`127.0.0.1`)

So usable Class A networks are:

```text
1 - 126
```

---

## Host Capacity

Class A uses:
- 1 octet for network
- 3 octets for hosts

Host bits:

```text
24 bits
```

Total hosts:

```text
2^24 = 16777216
```

Usable hosts:

```text
16777214
```

because:
- 1 address reserved for network address
- 1 address reserved for broadcast address

---

## Example

IP Address:

```text
9.4.3.47
```

Binary:

```text
00001001 00000100 00000011 00101111
```

Representation:

```text
(<u>00001001</u> 00000100 00000011 00101111)
```

- underlined portion => network portion
- remaining portion => host portion

Network portion:

```text
9
```

Host portion:

```text
4.3.47
```