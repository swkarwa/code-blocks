# Class B

Class B addresses are used for medium-sized networks.

---

## Binary Pattern

In Class B:
- first 2 bits are always `10`

Pattern:

```text
10XXXXXX XXXXXXXX
```

Remaining network bits:

```text
14
```

Possible combinations:

```text
2^14 = 16384
```

---

## Range

```text
128.0.0.0 - 191.255.255.255
```

---

## Host Capacity

Host bits:

```text
16 bits
```

Total hosts:

```text
2^16 = 65536
```

Usable hosts:

```text
65534
```

---

## Example

```text
151.10.13.55
```

Binary:

```text
10010111 00001010 00001101 00110111
```

Representation:

```text
(<u>10010111 00001010</u> 00001101 00110111)
```

Network portion:

```text
151.10
```

Host portion:

```text
13.55
```