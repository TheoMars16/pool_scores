# R-Type Network Protocol Specification

**Epitech Marseille**  
**December 2024**  
**Authors:**  
- T. Maestracci
- T. Fabiano
- M. Bousquet
- T. Vidal Savelli

## Table of Contents

1. [Introduction](#introduction)
2. [Packet Types and Structures](#packet-types-and-structures)
   - [Sprite Representation](#sprite-representation)
   - [Player Events](#player-events)
   - [Movement Directions](#movement-directions)
   - [Player Life Event](#player-life-event)
3. [Serialization and Deserialization](#serialization-and-deserialization)
4. [Communication Patterns](#communication-patterns)
   - [Sprite Updates](#sprite-updates)
   - [Player Events](#player-events-1)
5. [Implementation Notes](#implementation-notes)
6. [Recommendations for Client/Server Implementation](#recommendations-for-clientserver-implementation)

## Introduction

This document describes the network communication protocol for an R-Type style multiplayer game, detailing the data transmission mechanisms, packet structures, and communication patterns between server and client.

## Packet Types and Structures

### Sprite Representation

A sprite represents a game object with the following attributes:
- `spritesheetIndex`: Index of the sprite's texture sheet (unsigned short)
- `x`, `y`: Sprite's position in the spritesheet (unsigned short)
- `width`, `height`: Sprite's dimensions (unsigned short)
- `gameX`, `gameY`: Sprite's position in the game world (int)
- `scaleX`, `scaleY`: Sprite scaling factors (float)
- `id`: Unique sprite identifier (unsigned int)

**Sprite List Packet Serialization**

Each sprite is serialized sequentially with the following byte layout:
- `spritesheetIndex` (2 bytes)
- `x` (2 bytes)
- `y` (2 bytes)
- `width` (2 bytes)
- `height` (2 bytes)
- `gameX` (4 bytes, float)
- `gameY` (4 bytes, float)
- `id` (4 bytes)
- `scaleX` (4 bytes, float)
- `scaleY` (4 bytes, float)

### Player Events

The protocol supports several player events, encoded as enum values:

**Event Types**
- `MOVE`: Player movement
- `SHOOT`: Shooting action
- `CHARGED_SHOOT`: Charged shot action
- `JOIN`: Player joining game
- `DESTROY`: Object destruction

**Player Event Packet Structure**
- `Event type` (1 byte)
- `Player ID` (4 bytes)

**Player Movement Event Packet**

**Serialization Format:**
- `Player ID` (4 bytes)
- `X Direction` (1 byte, enum: UP, DOWN, LEFT, RIGHT, NONE)
- `Y Direction` (1 byte, enum: UP, DOWN, LEFT, RIGHT, NONE)

### Movement Directions

Directions are represented as an enumeration:
- `UP`
- `DOWN`
- `LEFT`
- `RIGHT`
- `NONE`

### Player Life Event

New event type to track player lives:
- `Player ID` (4 bytes)
- `Lives` (4 bytes, integer)

## Serialization and Deserialization

The `BinaryProtocol` class provides static methods for converting between in-memory structures and network-transmittable byte vectors:
- `serializeSpriteList()`: Converts sprite vector to byte vector
- `deserializeSpriteList()`: Converts byte vector back to sprite vector
- `serializePlayerEvent()`: Converts player event to byte vector
- `deserializePlayerEvent()`: Converts byte vector back to player event
- `serializePlayerEventMove()`: Converts player movement event to byte vector
- `deserializePlayerEventMove()`: Converts byte vector back to player movement event
- `serializePlayerEventLife()`: Converts player life event to byte vector
- `deserializePlayerEventLife()`: Converts byte vector back to player life event

## Communication Patterns

### Sprite Updates

- **Frequency:** Expected to be sent frequently (likely every frame)
- **Direction:** Server to Client
- **Purpose:** Update game world state, object positions, and rendering information

### Player Events

- **Frequency:** Sent on player input or state changes
- **Direction:** Client to Server
- **Types:**
  - **Movement:** When player changes direction
  - **Shooting:** When player fires (including charged shots)
  - **Join/Leave:** Player connection state changes
  - **Life updates:** Changes in player's remaining lives

## Implementation Notes

- Uses little-endian byte order
- Relies on `memcpy()` for direct memory manipulation
- No compression or encryption at the protocol level

## Recommendations for Client/Server Implementation

- Implement robust packet validation
- Handle network latency and packet loss
- Consider adding sequence numbers for reliable ordering
- Implement timeout and reconnection mechanisms
- Add error handling for incomplete or malformed packets