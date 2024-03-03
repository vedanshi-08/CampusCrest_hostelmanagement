package com.miniproject.hostel.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Couldnot find the user with id"+id);
    }
}
