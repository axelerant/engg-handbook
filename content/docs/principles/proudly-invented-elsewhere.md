---
weight: 7
description: Software development is not new. That means somebody might have already faced a similar problem and has solved it. Use libraries whenever you can. Even though a library does 70-80% of your requirement, consider using it.
---

# Proudly Invented Elsewhere

Software development is not new. That means somebody might have already faced a similar problem and has solved it. Use libraries whenever you can. Even though a library does 70-80% of your requirement, consider using it.

We prefer using established, contributed libraries over writing custom code. This approach is more cost-effective and requires fewer programming skills for maintenance. These projects often have established best practices and allow us to standardize our processes. To implement this, we download and configure relevant libraries. We choose to use these libraries when their functions closely align with our requirements, anticipated function changes can be accommodated through configuration, and other users should be able to make configuration changes.

There are cases where we should avoid using contributed libraries. If a lighter-weight approach can achieve the same functionality, if using other tools provides more configurability and less lock-in, if the complexity of setup and configuration outweighs the benefits, or if directly modifying the database might be more efficient, we might opt for custom code.

Our goal is to balance maintainability, flexibility, and performance while leveraging the expertise and insights of other developers in the contribution community.
