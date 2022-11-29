---
sidebar_position: 2
---

# Object-Oriented Design

export const Hb = ({children, color}) => (
  <span
    style={{
      backgroundColor: '#1877F2',
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

export const Hr = ({children, color}) => (
  <span
    style={{
      backgroundColor: '#F00175',
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

export const Hc = ({children, color}) => (
  <span
    style={{
      backgroundColor: '#25c2a0',
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

# Four Design Principles

## Abstraction

Abstraction breaks a concept down into a simplified description that ignores unimportant details and emphasizes the essentials needed for the concept, within some context.

An abstraction should follow <Hb>the rule of least astonishment</Hb>. This rule suggests that essential <Hb>attributes</Hb> and <Hb>behaviours</Hb> should be captured with no surprises and no definitions that fall beyond its scope.


![Abstraction](/img/cs/cs446/Abstraction.jpg)
```java

public class Food {
    public String groceryID; 
    public String name;
    public String manufacturer; 
    public Date expiryDate; 
    public double price;
    
    public boolean isOnSale( Date date ) {
        //
    } 
}

```

## Encapsulation

- The ability to <Hb>bundle</Hb> attributes and behaviours into a self-contained object.
- The ability to <Hb>expose</Hb> certain attributes and behaviours of that object, which can be accessed from other objects, usually through an interface.
- The ability to <Hb>restrict</Hb> access to certain data and functions to only within the object.

![Encapsulation](/img/cs/cs446/encapsulation.jpg)

### Accessibility

- <Hb>Public(+)</Hb>: can be accessed publicly
- <Hb>Private(-)</Hb>: can only be accessed from within the class

### Data Integrity

||<Hb>Getter methods</Hb>|<Hb>Setter methods</Hb>|
|--|--|--|
|Functionality|retrieve data|change data|
|Naming|get{AttributeName}|set{AttributeName}|
|Outcome|attribute will be returned|attribute will be changed|
|Note|Getters often retrieve private data.|Setters often set a private attribute in a safe way.|


## Decomposition

### Association
Loose Relationship, No Possession.

```java
public class Person {
    public void checkin(Hotel hotel){
        execute.checkin(hotel); 
    }
    ... 
}
```

### Aggregation
"Has-a" Relationship.

```java
public class Airliner {
    private ArrayList<CrewMember> crew;
    public Airliner() {
        crew = new ArrayList<CrewMember>();
    }
    public void add( CrewMember crewMember ) { 
        ...
    } 
}
```

### Composition

```java
public class House {
    private Room room;
    public House(){
        room = new Room();
    } 
}
```

## Generalization

### Inheritance
```java
public abstract class Animal { 
    protected int numberOfLegs; 
    protected int numberOfTails; 
    protected String name;
    
    public Animal( String petName, int legs, int tails ) {
        this.name = petName; 
        this.numberOfLegs = legs; 
        this.numberOfTails = tails;
    }

    public void walk() { ... } 
    public void run() { ... } 
    public void eat() { ... }
}

public class Lion extends Animal {
    public Lion( String name, int legs, int tails){
        super( name, legs, tails );
    }
    public void roar() { ... } 
}
```

### Implementation
```java
public abstract class Animal { 
    protected int numberOfLegs;
    public void walk() { ... } 
}

public abstract class Animal { 
    protected int numberOfLegs;
    public Animal( int legs ) { 
        this.numberOfLegs = legs;
    } 
}
```


![dependency](/img/cs/cs446/dependency.png)