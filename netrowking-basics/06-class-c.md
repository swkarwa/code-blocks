# Class C

Class C addresses are used for small networks.

---

## Binary Pattern

In Class C:
- first 3 bits are always `110`

Pattern:

```text
110XXXXX XXXXXXXX XXXXXXXX
```

Remaining network bits:

```text
21
```

Possible combinations:

```text
2^21 = 2097152
```

---

## Range

```text
192.0.0.0 - 223.255.255.255
```

---

## Host Capacity

Host bits:

```text
8 bits
```

Total hosts:

```text
2^8 = 256
```

Usable hosts:

```text
254
```

---

## Example

```text
203.42.62.1
```

Binary:

```text
11001011 00101010 00111110 00000001
```

Representation:

```text
(<u>11001011 00101010 00111110</u> 00000001)
```

Network portion:

```text
203.42.62
```

Host portion:

```text
1
```