# Technical Comparative Study

## Table of Contents

1. Graphics Library Choice
2. Network Protocol Choice
3. Networking Library Choice
4. Build System Selection
5. Game Architecture Decisions

## 1. Technological Choice

### Candidates Considered

* C
* C++
* C#
* Python

### Comparison Matrix

| Feature           | C    | C++   | C#   | Python |
| ----------------- | ---- | ----- | ---- | ------ |
| Ease of use       | ⭐⭐⭐⭐ | ⭐⭐⭐   | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐  |
| Performance       | ⭐⭐⭐  | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐    |
| Community Support | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐  |
| Documentation     | ⭐⭐⭐  | ⭐⭐⭐⭐  | ⭐⭐⭐⭐ | ⭐⭐⭐    |

### Decision: C++

* C++ Mandatory
* Excellent documentation
* Good link with ASIO & SFML
* Object oriented programming

## 2. Network Protocol Choice

### Candidates Considered

* UDP
* TCP
* HTTP

### Comparison Matrix

| Feature             | UDP                           | TCP                          | HTTP               |
| ------------------- | ----------------------------- | ---------------------------- | ------------------ |
| Ease of use         | ⭐⭐⭐⭐⭐                         | ⭐⭐⭐⭐                         | ⭐⭐⭐⭐⭐              |
| Performance         | ⭐⭐⭐⭐⭐                         | ⭐⭐⭐⭐                         | ⭐⭐⭐                |
| Reliability         | ⭐⭐                            | ⭐⭐⭐⭐⭐                        | ⭐⭐⭐⭐⭐              |
| Error Handling      | ⭐⭐                            | ⭐⭐⭐⭐⭐                        | ⭐⭐⭐⭐⭐⭐             |
| Connection Overhead | ⭐⭐⭐⭐⭐                         | ⭐⭐⭐                          | ⭐⭐⭐⭐               |
| Security            | ⭐⭐                            | ⭐⭐⭐⭐                         | ⭐⭐⭐⭐⭐              |
| Compatibility       | ⭐⭐⭐⭐⭐                         | ⭐⭐⭐⭐⭐                        | ⭐⭐⭐⭐⭐              |
| Common Use Cases    | Streaming, VoIP, Online games | File transfers, Web browsing | Web browsing, APis |

### Decision: UDP

* Low latency
* High performance
* Ideal for real-time games
* Less overhead
* Better for unreliable connections
* Better for real-time games

## 3. Networking Library Choice

### Candidates Considered

* Asio (asio-populate)
* Raw Sockets
* ENet
* RakNet

### Comparison Matrix

| Feature           | Asio  | Raw Sockets | ENet | RakNet |
| ----------------- | ----- | ----------- | ---- | ------ |
| Performance       | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐       | ⭐⭐⭐⭐ | ⭐⭐⭐⭐   |
| Ease of Use       | ⭐⭐⭐⭐  | ⭐⭐          | ⭐⭐⭐  | ⭐⭐⭐    |
| Features          | ⭐⭐⭐⭐⭐ | ⭐⭐          | ⭐⭐⭐⭐ | ⭐⭐⭐⭐   |
| Community Support | ⭐⭐⭐⭐⭐ | ⭐⭐⭐         | ⭐⭐⭐  | ⭐⭐     |

### Decision: Asio

* Industry standard
* Cross-platform support
* Extensive documentation
* Active maintenance

## 4. Build System Selection

### Candidates Considered

* CMake
* Make
* Meson
* Conan

### Decision: CMake

* Cross-platform compatibility
* Modern C++ support
* Wide IDE integration
* Package management capabilities

## 5. Game Architecture Decisions

### ECS vs Traditional OOP

* Better performance for game objects
* More flexible component system
* Easier to extend functionality
* Better cache coherency

### Binary Protocol vs Text Protocol

* Lower bandwidth usage
* Faster parsing
* More efficient for real-time games
* Better for UDP packets

### 6. Accessibility Considerations

### Candidates Considered

* Sensibilité Ajustable
* Remappage Complet
* Taille de Texte
* Contraste Ajustable
* Filtres Daltonisme
* Sous-titres
* Indicateurs Visuels
* Mode Ralenti

#### Features Integrated

* **Customizable Controls**: Players can remap keys for better accessibility and use a controller.
* **Visual Adjustments**: Adjustable contrast and font sizes for better visibility.
* **Audio Cues**: Directional sounds and alerts for critical events in the game.
* **Subtitles**: Customizable subtitles for dialogues and sound effects.
* **Assistive Modes**: Slow-motion or auto-fire options for players with motor impairments.

## Conclusion

Our technical choices prioritized:

1. Cross-platform compatibility
2. Modern C++ practices
3. Performance optimization
4. Developer productivity
