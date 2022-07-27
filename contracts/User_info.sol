// SPDX-License-Identifier: MIT

pragma solidity >= 0.8.0;

contract user{
    mapping(uint256 => user) User;

    struct user{
        uint256 userid;
        string name;
        string emailid;
        string edu; //school or collage name
        string eduname;
    }
    user u;

    function register(uint256 _userid,string memory _name,string memory _emailid,string memory _edu,string memory _eduname) public{
        u.name = _name;
        u.emailid = _emailid;
        u.edu = _edu;
        u.eduname = _eduname;

        User[_userid] = u;
    }

    function getuser(uint _userid)public view returns(string memory,string memory,string memory,string memory){
        user memory u = User[_userid];
        return(u.name,u.emailid,u.edu,u.eduname);
    }
}