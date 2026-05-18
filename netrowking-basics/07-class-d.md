# Class D

Class D addresses are used for multicast communication.

Multicast means:
- one sender transmits data
- multiple receivers receive it simultaneously

Examples:
- live video streaming
- IPTV
- webinars

---

## Binary Pattern

In Class D:
- first 4 bits are always `1110`

Pattern:

```text
1110XXXX
```

---

## Range

```text
224.0.0.0 - 239.255.255.255
```

---

## Example

```text
224.1.1.1
```

Binary:

```text
11100000 00000001 00000001 00000001
```

Class D addresses:
- do not contain network and host portions
- represent multicast groups