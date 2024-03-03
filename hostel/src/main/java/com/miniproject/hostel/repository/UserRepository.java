package com.miniproject.hostel.repository;

import com.miniproject.hostel.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
