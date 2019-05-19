# FindMembershipFee

If we needed to find the membership fee for a particular property, this method could act as a micro service and return the expected fee.

The model can be broken down to something like in this diagram:
![alt text](./unnamed.png?raw=true)

Because a child node needs to search up its parent hierarchy to find a possible fixed membership fee, I have opted to
include a reference to the parent of each node making the models bi directional and the search of the fixed membership fee much faster.  

Validation was separated which allows it to be reused for other future functionality as well as begin able to add to it 
easily by just including the method in the main validation class. If validation gets more complicated, a rule set can 
be applied and the validation rules can be split into classes which all implement the same validation interface
and are run from a master validation method.  
