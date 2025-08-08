# Performance Analysis

## Hash Function Characteristics

### Implementation

- **Technique**: Word-length folding (4-byte chunks)
- **Operations**:
  - Bitwise OR and shifting
  - XOR bit mixing (`hashValue ^= hashValue >>> 16`)
  - Modulo `(tableSize - 1)` for final index

## Operation Complexities

| Operation | Average Case       | Worst Case         |
|-----------|--------------------|--------------------|
| Insert    | O(k) + O(1/(1-α)) | O(k) + O(n)        |
| Get       | O(k) + O(1/(1-α)) | O(k) + O(n)        |
| Delete    | O(k) + O(1/(1-α)) | O(k) + O(n)        |

- k = key length
- n = items in table
- α = load factor (0.7 threshold)

## Trade-offs

### Open Addressing (Quadratic Probing)

✅ **Pros**:

- Better cache locality
- No pointer overhead
- Simpler memory management

❌ **Cons**:

- Performance degrades at high load factors (α > 0.7)
- More complex deletion handling

### DELETED Marker System

✅ **Pros**:

- Maintains probe sequences
- Distinguishes empty vs deleted slots

❌ **Cons**:

- Accumulates space with DELETED value
- Wasted space until resizing

### Resizing Strategy

✅ **Pros**:

- Amortized O(1) cost
- Cleans DELETED markers

❌ **Cons**:

- Blocking operation
- Non-prime table sizes after resize
