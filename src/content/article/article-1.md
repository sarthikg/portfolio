---
slug: "article-1"

title: "This is the title"
description: "This is the description"
date: 2023-11-12
image: { src: "/src/assets/images/article/placeholder.jpg", alt: "A picture" }
tags: ["JavaScript", "TypeScript"]
featured: true
---

# This is the H1

A Database is a collection of related data. This data can be of the following 2 types:

## This is the H2

A Database is a collection of related data. This data can be of the following 2 types:

### This is the H3

A Database is a collection of related data. This data can be of the following 2 types:

#### This is the H4

A Database is a collection of related data. This data can be of the following 2 types:

##### This is the H5

A Database is a collection of related data. This data can be of the following 2 types:

1. **Structured Data** - Data has a structure & can be easily stored in tables
2. **Unstructured Data** - Data doesn't follow a structure & is hard to store in a table

![The San Juan Mountains are beautiful!](/src/assets/images/article/placeholder.jpg "San Juan Mountains")

### DBMS

A Database Management System comprises of operations that can be performed on the data by the user . This includes operations like create, read, update, delete. [This is a link]()

---

### Schema

A Schema is a logical representation of a database. In RDBMS, a database is logically represented as tables, even though the underlying physical structure on the drive might be different.

## History

Prior to existence of DBMS, everything used to be a file-system. File-systems rely on storing the data in form of files in a hierarchical form. For the following reasons, databases took over file-systems for storing data for application systems:

1. **Searching** - If we want to search for some data, in file-systems, we will end up with a file. But databases help us to search even more granularly. Imagine searching for a train in IRCTC. In a file-system data, that might return the file with all the trains, but in databases, we can search for the exact train we are looking for. This makes the searching fast & memory-efficient.
2. **Attributes** - To search for a file in a file-system, we need some meta-data about it. In the above example, we might require information like path to the file, permissions of the file access, etc. While, in databases, this is not the case. DBMS exposes a way to query data without knowing the exact metadata for it.
3. **Concurrency** - When multiple users are trying to access same piece of data at a single time, there is no protocol in file-system to prevent inconsistency. Databases have concepts of locks, etc. to manage this.
4. **Security** - Providing role-based access control over data is much better managed in a database compared to a file-system.
5. **Redundancy** - There's no protocol (expect having 2 files with same names) to eliminate data redundancy in file-systems. If a piece of information is stored multiple times in a single file, or if the same information is stored across multiple files with different names, there is no provision in file-systems to handle that. But, in databases, there are concepts like primary keys that can handle data redundancies in a much better way.

## Architecture Tiers

### 2-Tier Architecture

In a 2-tier architecture, a client directly connects with the database and performs the crud operations on it. This kind of architecture is followed in banks where the bankers directly connect to the database to perform the operations.

#### Pros:

1. **Maintenance** - It is easy to maintain as there are less moving pieces.

#### Cons:

1. **Scalability** - It is usually implemented when there are a limited number of clients. Hence scalability is tough.
2. **Security** - The clients directly connect with the database to perform operations. This impacts the overall security of the system

### 3-Tier Architecture

In a 3-tier architecture, a client sends the query to an application server, which in-turn forms a relevant query for the database, and executes the query on the database. This kind of architecture is followed in almost all the modern applications, and the application server is usually called the backend.

#### Pros:

1. **Security** - Since the clients are only interacting with the application-server, this enhances the security as the operations on the database are only the one's that are provided by the app-server based on role-based access control.
2. **Scalability** - Clients interact with a common application-server. This means, clients do not require technical know-how of the database, and hence, the number of clients can be easily scaled.

#### Cons:

1. **Maintenance** - Having to maintain an extra application-server, this impacts maintenance when compared to the 2-tier architecture.

## 3-Schema Architecture

A 3 schema architecture for managing data is used to decouple the client from the physical representation of data, i.e. users should be abstracted away from where & how the data is actually stored in the disk.
This architecture also allows developers to work independently from database designers & database administrators in managing the database.

![[3-schema-architecture.excalidraw]]

### External Schema

External Schema is the data representation for clients. This means, its the format of data that is presented to the frontend layer. There can be multiple external schemas for each type of user based on their role-based access control policies.

### Conceptual Schema

Conceptual Schema is the logical representation of the database. This logical representation is usually done in form of ER-Diagrams. Database designers usually work on this layer to design how the data should be structured.

### Physical Schema

Physical Schema is the representation of data storage in the physical form, i.e. disk. This takes into account where the data is stored in disk, while also managing the files that stores the actual data. Database administrators usually work on this layer.

## Data Independence

Data Independence means that changes in the database management should not affect the users above in the hierarchy. In the above 3-schema archicture:

1. Changing the conceptual schema should not affect the external schema. This means, if we change the name of the tables, add a new column, change data type, etc., these changes should not affect the data that is received by the frontend.
2. Changing the logical schema should not affect the application code & the external schema. This means, if we change the storage structure, location, data-structure or indexes, the app-server should not be required to make changes, i.e. it should not affect the backend or the frontend.
   This helps in making sure that developers can work on enhancing the database, or be able to add new features without impacting the end consumers.

> [!info] Table Relationship Representation
> In the given representation, i.e. `R(ABCD)` , it means that a given table has 4 columns named `A`, `B`, `C` & `D`.

## Integrity Constraints

These are the rules defined in a database to maintain data accuracy, consistency & reliability. This ensures that the data stored in the database follows predefined rules or conditions. There are following 4 types of integrity constraints:

1. **Domain Constraint** - These work on the attributes of the data, i.e. data to be stored in each column. Every column has some specified set of rules that enables the type of data that can be entered in it. This includes, datatype, range-based conditions, length-based constraints, etc.
2. **Entity Integrity Constraint** - According to this constraint, every table should have at least 1 primary key to make sure data is unique. This primary key should also be "not null" as well as unique.
3. **Referential Integrity Constraints** - According to this constraint, if data in 2 tables in related, then it should be related through foreign keys. This ensures that data cannot be added in child tables without first adding it to the parent tables.
4. **Key Constraints** - According to this constraint, every table should have at least 1 unique column to maintain uniqueness of data. Though, a table can also have multiple unique columns, but at least 1 should be required. This unique column is linked with Candidate Key.

| SID | Name  | CID | Course Name | FID | Faculty Name | Salary |
| --- | ----- | --- | ----------- | --- | ------------ | ------ |
| 1   | Ram   | C1  | DBMS        | F1  | John         | 30000  |
| 2   | Ravi  | C2  | JAVA        | F2  | Bob          | 40000  |
| 3   | Nitin | C1  | DBMS        | F1  | John         | 30000  |
| 4   | Amrit | C1  | DBMS        | F1  | John         | 30000  |

In the above case, we have 2 tables, one for Students & another for Courses. Having a many to many relationship, we create a third table, which maps a `student_id` with a `course_id`. The following are the things to note:

1. This relationship table can have a composite key, the one that is comprised of both the `student_id` & the `course_id` as a primary key since the combination of both is unique.
2. We cannot merge the relationship table with either of the other tables.

_If a table consists of n columns & 1 of them is a candidate key, there would be total 2^(n-1) super keys. This is because, there are 2 options for each key, to include it or to not include it, except for the first key which has only 1 option, which is to include it_

```typescript
const a = "something";
console.log(a);
```
