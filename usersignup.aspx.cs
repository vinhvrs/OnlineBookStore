﻿using System;
            Console.WriteLine(strcon);
            //try
            //{
          
                con.ConnectionString = strcon;

            // WAIT FOR PARAMETERS
            SqlCommand query = new SqlCommand("INSERT INTO member_master_tbl(full_name, dob, contact_no, email, state, city, pincode, full_address, member_id, password, account_status) values(@fullname_name, @dob, @contact_no, @email, @state, @city, @pincode, @full_address, @member_id, @password, @account_status)", con);
            query.Parameters.AddWithValue("@full_name", TextBox1.Text.Trim());
            query.Parameters.AddWithValue("@dob", TextBox2.Text.Trim());
            query.Parameters.AddWithValue("@contact_no", TextBox3.Text.Trim());
            query.Parameters.AddWithValue("@email", TextBox4.Text.Trim());
            query.Parameters.AddWithValue("@state", DropDownList1.SelectedItem.Value);
            query.Parameters.AddWithValue("@city", DropDownList1.SelectedItem.Value);
            //query.Parameters.AddWithValue("@pincode", TextBox7.Text.Trim());
            query.Parameters.AddWithValue("@full_address", TextBox5.Text.Trim());
            //query.Parameters.AddWithValue("@member_id", TextBox8.Text.Trim());
            //query.Parameters.AddWithValue("@password", TextBox9.Text.Trim());
            query.Parameters.AddWithValue("@account_status", "pending");
            // THIS IS FOR SIGn UP


            //// Test
            //SqlCommand query = new SqlCommand("INSERT INTO author_master_tbl(author_name, author_id) VALUES(@full_name, @contact_no) ", con);
            //query.Parameters.AddWithValue("@full_name", TextBox1.Text.Trim());
            //query.Parameters.AddWithValue("@contact_no", TextBox3.Text.Trim());
            //// -- END TEST
            query.ExecuteNonQuery();