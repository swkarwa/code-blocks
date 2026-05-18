# Network Communication

Consider Network X:

```text
172.16.0.1
172.16.0.2
172.16.0.3
```

Consider Network Y:

```text
172.17.0.1
172.17.0.2
172.17.0.3
```

---

## Same Network Communication

Suppose:

```text
172.16.0.1
```

wants to communicate with:

```text
172.16.0.3
```

First octet:

```text
172 -> 10101100
```

First two bits:

```text
10
```

So device identifies this as Class B.

In Class B:
- first 2 octets => network
- remaining 2 octets => hosts

Network portions:

```text
172.16
172.16
```

Since both are same:
- communication is direct
- router not required

---

## Different Network Communication

Suppose:

```text
172.16.0.1
```

communicates with:

```text
172.17.0.3
```

Network portions:

```text
172.16
172.17
```

Networks are different.

Therefore:
- router is required
- router forwards packet to destination network