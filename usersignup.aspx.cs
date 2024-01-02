using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OnlineBookstore
{
    public partial class usersignup : System.Web.UI.Page
    {
        string strcon = ConfigurationManager.ConnectionStrings["con"].ConnectionString;
        protected void Page_Load(object sender, EventArgs e)
        {
        }
        // sign up button click event
        protected void Button1_Click(object sender, EventArgs e)
        {
            if (checkMemberExists())
            {

                Response.Write("<script>alert('Member Already Exist with this Member ID, try other ID');</script>");
            }
            else
            {
                signUpNewMember();
            }
        }

        // user defined method
        bool checkMemberExists()
        {
            try
            {
                SqlConnection con = new SqlConnection(strcon);
                if (con.State == ConnectionState.Closed)
                {
                    con.Open();
                }
                SqlCommand cmd = new SqlCommand("SELECT * from member_master_table where member_id='" + TextBox8.Text.Trim() + "';", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count >= 1)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                Response.Write("<script>alert('" + ex.Message + "');</script>");
                return false;
            }
        }
        void signUpNewMember()
        {
            //Response.Write("<script>alert('Testing');</script>");
            try
            {
                SqlConnection con = new SqlConnection(strcon);
                if (con.State == ConnectionState.Closed)
                {
                    con.Open();
                }
                SqlCommand cmd = new SqlCommand("INSERT INTO member_master_tbl(full_name,dob,contact_no,email,pincode,member_id,password,account_status) values(@full_name,@dob,@contact_no,@email,@pincode,@member_id,@password,@account_status)", con);
                SqlCommand cmd2 = new SqlCommand("INSERT INTO member_address(member_id,address_id,state,city,street) values(@member_id,@address_id,@state,@city,@full_address)", con);
                cmd.Parameters.AddWithValue("@full_name", TextBox1.Text.Trim());
                cmd.Parameters.AddWithValue("@dob", TextBox2.Text.Trim());
                cmd.Parameters.AddWithValue("@contact_no", TextBox3.Text.Trim());
                cmd.Parameters.AddWithValue("@email", TextBox4.Text.Trim());
                cmd.Parameters.AddWithValue("@pincode", TextBox7.Text.Trim());
                cmd.Parameters.AddWithValue("@member_id", TextBox8.Text.Trim());
                cmd.Parameters.AddWithValue("@password", TextBox9.Text.Trim());
                cmd.Parameters.AddWithValue("@account_status", "pending");
                cmd.ExecuteNonQuery();

                SqlCommand query_count = new SqlCommand("SELECT COUNT(address_id) FROM member_address", con);
                int count = (int)query_count.ExecuteScalar() + 1;
                String count_address = "de";
                if (count < 10)
                {
                    count_address += "00";
                    count_address += count.ToString();
                }
                else if (count < 100)
                {
                    count_address += "0";
                    count_address += count.ToString();
                }
                else
                {
                    count_address += count.ToString();
                }

                cmd2.Parameters.AddWithValue("@member_id", TextBox8.Text.Trim());
                cmd2.Parameters.AddWithValue("@address_id", count_address);
                cmd2.Parameters.AddWithValue("@state", DropDownList1.SelectedItem.Value);
                cmd2.Parameters.AddWithValue("@city", TextBox6.Text.Trim());
                cmd2.Parameters.AddWithValue("@full_address", TextBox5.Text.Trim());
                //cmd2.Parameters[1].Value = "TEST";
                cmd2.ExecuteNonQuery();

                con.Close();
                Response.Write("<script>alert('Sign Up Successful. Go to User Login to Login');</script>");
            }
            catch (Exception ex)
            {
                Response.Write("<script>alert('" + ex.Message + "');</script>");
            }
        }
    }
}