import unittest
from my_module import validate_age

class TestPassFail(unittest.TestCase):
    def test_pass_condition(self):
        self.assertEqual(validate_age(20), "Pass")

    def test_fail_condition(self):
        self.assertEqual(validate_age(16), "Fail")

    def test_boundary_case(self):
        self.assertEqual(validate_age(18), "Pass")

if __name__ == '__main__':
    unittest.main()
